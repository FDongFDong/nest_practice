import { IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';
// npm i @nestjs/mapped-types : 타입을 변환시키고 사용할 수 있게 하는 패키지
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}

// export class UpdateMovieDto {
//   @IsString() // '?' 읽기는 전용이나 필수는 아니라는 의미
//   readonly title?: string;
//   @IsNumber()
//   readonly year?: number;
//   @IsString({ each: true }) // 각각을 검사한다.
//   readonly genres?: string[];
// }
