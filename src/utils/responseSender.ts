import { NextApiRequest, NextApiResponse } from 'next'
import { HttpResponse, HttpErrorResponse } from './response'
import { EHttpEvent, EHttpStatus } from './Enums'

export default class ResponseSender {
	public ok<T>(req: NextApiRequest, res: NextApiResponse, data: T): void {
		const requestUrl = req.url
		const httpResponse = new HttpResponse<T>(true, requestUrl, EHttpEvent.Response, data, EHttpStatus.OK, 'OK')
		return res.status(EHttpStatus.OK).json(httpResponse)
	}

	public created<T>(req: NextApiRequest, res: NextApiResponse, data: T): void {
		const requestUrl = req.url
		const httpResponse = new HttpResponse<T>(
			true,
			requestUrl,
			EHttpEvent.Response,
			data,
			EHttpStatus.CREATED,
			'CREATED'
		)
		return res.status(EHttpStatus.CREATED).json(httpResponse)
	}

	public accepted(req: NextApiRequest, res: NextApiResponse): void {
		const requestUrl = req.url
		const httpResponse = new HttpResponse(
			true,
			requestUrl,
			EHttpEvent.Response,
			null,
			EHttpStatus.ACCPETED,
			'ACCEPTED'
		)
		return res.status(EHttpStatus.ACCPETED).json(httpResponse)
	}

	public noContent(req: NextApiRequest, res: NextApiResponse): void {
		const requestUrl = req.url
		const httpResponse = new HttpResponse(
			true,
			requestUrl,
			EHttpEvent.Response,
			null,
			EHttpStatus.NO_CONTENT,
			'NO_CONTENT'
		)
		return res.status(EHttpStatus.NO_CONTENT).json(httpResponse)
	}

	public resetContent(req: NextApiRequest, res: NextApiResponse): void {
		const requestUrl = req.url
		const httpResponse = new HttpResponse(
			true,
			requestUrl,
			EHttpEvent.Response,
			null,
			EHttpStatus.RESET,
			'RESET_CONTENT'
		)
		return res.status(EHttpStatus.RESET).json(httpResponse)
	}

	public partialContent<T>(req: NextApiRequest, res: NextApiResponse, data: T): void {
		const requestUrl = req.url
		const httpResponse = new HttpResponse(
			true,
			requestUrl,
			EHttpEvent.Response,
			data,
			EHttpStatus.PARTIAL_CONTENT,
			'PARTIAL_CONTENT'
		)
		return res.status(EHttpStatus.PARTIAL_CONTENT).json(httpResponse)
	}

	public badRequest(req: NextApiRequest, res: NextApiResponse, message: string, error?: unknown): void {
		const requestUrl = req.url
		const httpErrorResponse = new HttpErrorResponse(
			false,
			requestUrl,
			EHttpEvent.Response,
			error,
			message,
			EHttpStatus.BAD_REQUEST,
			'BAD_REQUEST'
		)
		return res.status(EHttpStatus.BAD_REQUEST).json(httpErrorResponse)
	}

	public unauthorized(req: NextApiRequest, res: NextApiResponse, message: string, error?: unknown): void {
		const requestUrl = req.url
		const httpErrorResponse = new HttpErrorResponse(
			false,
			requestUrl,
			EHttpEvent.Response,
			error,
			message,
			EHttpStatus.UNAUTHORIZED,
			'UNAUTHORIZED'
		)
		return res.status(EHttpStatus.UNAUTHORIZED).json(httpErrorResponse)
	}

	public forbidden(req: NextApiRequest, res: NextApiResponse, message: string, error?: unknown): void {
		const requestUrl = req.url
		const httpErrorResponse = new HttpErrorResponse(
			false,
			requestUrl,
			EHttpEvent.Response,
			error,
			message,
			EHttpStatus.FORBIDDEN,
			'FORBIDDEN'
		)
		return res.status(EHttpStatus.FORBIDDEN).json(httpErrorResponse)
	}

	public notFound(req: NextApiRequest, res: NextApiResponse, message: string, error?: unknown): void {
		const requestUrl = req.url
		const httpErrorResponse = new HttpErrorResponse(
			false,
			requestUrl,
			EHttpEvent.Response,
			error,
			message,
			EHttpStatus.NOT_FOUND,
			'NOT_FOUND'
		)
		return res.status(EHttpStatus.NOT_FOUND).json(httpErrorResponse)
	}

	public notAllowed(req: NextApiRequest, res: NextApiResponse, message: string, error?: unknown): void {
		const requestUrl = req.url
		const httpErrorResponse = new HttpErrorResponse(
			false,
			requestUrl,
			EHttpEvent.Response,
			error,
			message,
			EHttpStatus.NOT_ALLOWED,
			'NOT_ALLOWED'
		)
		return res.status(EHttpStatus.NOT_ALLOWED).json(httpErrorResponse)
	}

	public conflict(req: NextApiRequest, res: NextApiResponse, message: string, error?: unknown): void {
		const requestUrl = req.url
		const httpErrorResponse = new HttpErrorResponse(
			false,
			requestUrl,
			EHttpEvent.Response,
			error,
			message,
			EHttpStatus.CONFLICT,
			'CONFLICT'
		)
		return res.status(EHttpStatus.CONFLICT).json(httpErrorResponse)
	}

	public gone(req: NextApiRequest, res: NextApiResponse, message: string, error?: unknown): void {
		const requestUrl = req.url
		const httpErrorResponse = new HttpErrorResponse(
			false,
			requestUrl,
			EHttpEvent.Response,
			error,
			message,
			EHttpStatus.GONE,
			'GONE'
		)
		return res.status(EHttpStatus.GONE).json(httpErrorResponse)
	}

	public lengthRequired(req: NextApiRequest, res: NextApiResponse, message: string, error?: unknown): void {
		const requestUrl = req.url
		const httpErrorResponse = new HttpErrorResponse(
			false,
			requestUrl,
			EHttpEvent.Response,
			error,
			message,
			EHttpStatus.LENGTH_REQUIRED,
			'LENGTH_REQUIRED'
		)
		return res.status(EHttpStatus.LENGTH_REQUIRED).json(httpErrorResponse)
	}

	public payloadTooLarge(req: NextApiRequest, res: NextApiResponse, message: string, error?: unknown): void {
		const requestUrl = req.url
		const httpErrorResponse = new HttpErrorResponse(
			false,
			requestUrl,
			EHttpEvent.Response,
			error,
			message,
			EHttpStatus.PAYLOAD_TOO_LARGE,
			'PAYLOAD_TOO_LARGE'
		)
		return res.status(EHttpStatus.PAYLOAD_TOO_LARGE).json(httpErrorResponse)
	}

	public unsupportedMediaType(req: NextApiRequest, res: NextApiResponse, message: string, error?: unknown): void {
		const requestUrl = req.url
		const httpErrorResponse = new HttpErrorResponse(
			false,
			requestUrl,
			EHttpEvent.Response,
			error,
			message,
			EHttpStatus.UNSUPPORTED_MEDIA_TYPE,
			'UNSUPPORTED_MEDIA_TYPE'
		)
		return res.status(EHttpStatus.UNSUPPORTED_MEDIA_TYPE).json(httpErrorResponse)
	}

	public tooManyRequests(req: NextApiRequest, res: NextApiResponse, message: string, error?: unknown): void {
		const requestUrl = req.url
		const httpErrorResponse = new HttpErrorResponse(
			false,
			requestUrl,
			EHttpEvent.Response,
			error,
			message,
			EHttpStatus.TOO_MANY_REQUESTS,
			'TOO_MANY_REQUESTS'
		)
		return res.status(EHttpStatus.TOO_MANY_REQUESTS).json(httpErrorResponse)
	}

	public internalError(req: NextApiRequest, res: NextApiResponse, message: string, error?: unknown): void {
		const requestUrl = req.url
		const httpErrorResponse = new HttpErrorResponse(
			false,
			requestUrl,
			EHttpEvent.Response,
			error,
			message,
			EHttpStatus.INTERNAL_SERVER_ERROR,
			'INTERNAL_SERVER_ERROR'
		)
		return res.status(EHttpStatus.INTERNAL_SERVER_ERROR).json(httpErrorResponse)
	}

	public notImplemented(req: NextApiRequest, res: NextApiResponse, message: string, error?: unknown): void {
		const requestUrl = req.url
		const httpErrorResponse = new HttpErrorResponse(
			false,
			requestUrl,
			EHttpEvent.Response,
			error,
			message,
			EHttpStatus.NOT_IMPLEMENTED,
			'NOT_IMPLEMENTED'
		)
		return res.status(EHttpStatus.NOT_IMPLEMENTED).json(httpErrorResponse)
	}

	public serviceUnavailable(req: NextApiRequest, res: NextApiResponse, message: string, error?: unknown): void {
		const requestUrl = req.url
		const httpErrorResponse = new HttpErrorResponse(
			false,
			requestUrl,
			EHttpEvent.Response,
			error,
			message,
			EHttpStatus.SERVICE_UNAVAILABLE,
			'SERVICE_UNAVAILABLE'
		)
		return res.status(EHttpStatus.SERVICE_UNAVAILABLE).json(httpErrorResponse)
	}
}

export const {
	ok,
	created,
	accepted,
	noContent,
	resetContent,
	partialContent,
	badRequest,
	unauthorized,
	forbidden,
	notFound,
	notAllowed,
	conflict,
	gone,
	lengthRequired,
	payloadTooLarge,
	unsupportedMediaType,
	tooManyRequests,
	internalError,
	notImplemented,
	serviceUnavailable
} = new ResponseSender()
