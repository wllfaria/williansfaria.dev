import { EHttpStatus, EHttpEvent } from './Enums'

export abstract class HttpBaseResponse {
	public ok: boolean
	public status: EHttpStatus
	public statusText: string
	public url: string
	public type: EHttpEvent

	constructor(
		ok: boolean,
		url: string,
		type: EHttpEvent,
		status?: EHttpStatus,
		statusText?: string,
		defaultStatus = EHttpStatus.OK,
		defaultStatusText = 'OK'
	) {
		this.ok = ok
		this.status = status || defaultStatus
		this.statusText = statusText || defaultStatusText
		this.url = url
		this.type = type
	}
}

export class HttpResponse<T> extends HttpBaseResponse {
	public body: unknown

	constructor(
		ok: boolean,
		url: string,
		type: EHttpEvent,
		body?: T | null,
		status?: EHttpStatus,
		statusText?: string
	) {
		super(ok, url, type, status, statusText)
		this.body = body !== undefined ? body : null
	}
}

export class HttpErrorResponse extends HttpBaseResponse implements Error {
	readonly name = 'HttpErrorResponse'
	readonly message: string
	readonly error: unknown | null

	readonly ok = false

	constructor(
		ok: boolean,
		url: string,
		type: EHttpEvent,
		error: unknown,
		message: string,
		status?: EHttpStatus,
		statusText?: string
	) {
		super(ok, url, type, status, statusText)

		this.message = message
		this.error = error || null
	}
}
