declare global {
  interface Window {
    [key: string]: unknown
  }
}

export interface JsonpOptions {
  callbackParam?: string
  callbackFunctionName?: string
  timeoutDuration?: number
}

class Jsonp {
  constructor() {
    this.options = {}
    this.timer = null
    this.scriptElement = null
  }

  private options: JsonpOptions

  private timer: NodeJS.Timeout | null

  private scriptElement: HTMLScriptElement | null

  public get<T>(url: string, options?: JsonpOptions) {
    return new Promise<T>((resolve, reject) => {
      this.access(url, options || {}, (data: T | null, error: Error | null) => {
        if (error) {
          reject(error)
        }
        if (data) {
          resolve(data)
        }
      })
    })
  }

  private access<T>(url: string, options: JsonpOptions, fn: (data: T | null, error: Error | null) => void) {
    const uniqueString = Date.now().toString(36) + Math.random().toString(36).slice(2, 7)

    this.options = {
      callbackParam: options.callbackParam || 'jsonpCallback',
      callbackFunctionName: options.callbackFunctionName || `callbackFunction_${uniqueString}`,
      timeoutDuration: options.timeoutDuration || 60 * 1000,
    }

    this.timer = setTimeout(() => {
      this.cleanup()
      fn(null, new Error('Timeout'))
    }, this.options.timeoutDuration)

    if (this.options.callbackFunctionName) {
      window[this.options.callbackFunctionName] = (data: T) => {
        this.cleanup()
        fn(data, null)
      }
    }

    let newUrl = url
    newUrl += `${(url.indexOf('?') === -1 ? '?' : '&') + this.options.callbackParam}=${
      this.options.callbackFunctionName
    }`
    newUrl = newUrl.replace('?&', '?')

    const targetElement = document.getElementsByTagName('script')[0] || document.head
    this.scriptElement = document.createElement('script')
    this.scriptElement.src = newUrl
    this.scriptElement.type = 'text/javascript'
    this.scriptElement.defer = true
    this.scriptElement.referrerPolicy = 'no-referrer-when-downgrade'
    targetElement.parentNode?.insertBefore(this.scriptElement, targetElement)
  }

  public cleanup() {
    if (this.scriptElement?.parentNode) {
      this.scriptElement.parentNode.removeChild(this.scriptElement)
    }
    if (this.options.callbackFunctionName) {
      delete window[this.options.callbackFunctionName]
    }
    if (this.timer) {
      clearTimeout(this.timer)
    }
  }
}

export const jsonp = new Jsonp()
