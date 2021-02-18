import {
  ExecutionContext,
  Injectable,
  NestInterceptor,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

type Pagination = {
  data: any[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}

@Injectable()
export class SentryInterceptor implements NestInterceptor<any, Pagination> {

  intercept( context: ExecutionContext, next: CallHandler): Observable<Pagination> {
    return next
      .handle()
      .pipe(
        tap((response) => {
          console.log(response);
        }, (exception) => {
          if (exception) {
            // Sentry.captureException(exception);
          }
        }),
        finalize(() => {
          // transaction.finish();
        })
      );
  }

}
