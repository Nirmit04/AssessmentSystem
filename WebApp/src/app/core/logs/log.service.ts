import { Injectable } from '@angular/core';
import { LogFields } from './log-data.interface';
import { Logger } from './logger';
import { environment } from '../../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class LogService {
	private logger: Logger;

	constructor(private userId: string) {}

	public initialize() {
		this.logger = new Logger(environment.appName, environment.endpoints.elasticSearchEndpoint);
	}

	public logHttpInfo(info: any, elapsedTime: number, requestPath: string) {
		// TODO: create and set correlation id
		const url = location.href;
		const logFields: LogFields = {
			environment: environment.env,
			userId: this.userId,
			requestPath,
			elapsedTime,
			url
		};

		this.logger.log('Information', `${info}`, logFields);
	}

	public logWarning(errorMsg: string) {
		const logFields = this.logging();
		this.logger.log('Warning', errorMsg, logFields);
	}

	private logging() {
		const url = location.href;

		const logFields: LogFields = {
			environment: environment.env,
			userId: this.userId,
			requestPath: '',
			elapsedTime: 0,
			url: url
		};
		return logFields;
	}

	public logError(errorMsg: string) {
		const logFields = this.logging();
		this.logger.log('Warning', errorMsg, logFields);
		this.logger.log('Error', errorMsg, logFields);
	}

	public logInfo(info: any) {
		const url = location.href;

		const logFields: LogFields = {
			environment: environment.env,
			userId: this.userId,
			requestPath: '',
			elapsedTime: 0,
			url
		};

		this.logger.log('Information', info, logFields);
	}
}
