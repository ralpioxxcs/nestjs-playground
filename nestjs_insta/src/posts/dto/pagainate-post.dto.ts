import { Type } from 'class-transformer';
import { IsIn, IsNumber, IsOptional } from 'class-validator';

export class PaginatePostDto {
  @IsNumber()
  @IsOptional()
  page?: number;

  @IsNumber()
  @IsOptional()
  where__id_less_than?: number;

  // 이전 마지막 데이터의 ID
  // 이 프로퍼티에 입력된 ID 보다 높은 ID값을 가져옴
  //@Type(()=> Number)
  @IsNumber()
  @IsOptional()
  where__id_more_than?: number;

  // 정렬
  // createdAt -> 생성된 시간의 내림차/오름차 정렬
  @IsIn(['ASC', 'DESC'])
  @IsOptional()
  order__createdAt: 'ASC' | 'DESC' = 'ASC';

  // 몇개의 데이터를 응답으로 받을지
  @IsNumber()
  @IsOptional()
  take: number = 20;
}
