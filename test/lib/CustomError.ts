/**
 * CustomError(This Object is use Only TestCode)
 */
export default class CustomError extends Error {
  private _optionalObject: any;

  /**
   * @param {string} message
   */
  constructor(message: string = "CustomError!!!") {
    super(message);
    this.name = this.constructor.name;

    Error.captureStackTrace(this, this.constructor);
  }

  /**
   * @returns {any}
   */
  get optionalObject(): any {
    return this._optionalObject;
  }

  /**
   * @param value
   */
  set optionalObject(value: any) {
    this._optionalObject = value;
  }
}
