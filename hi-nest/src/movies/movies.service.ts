import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from 'src/dto/create-movie.dto';
import { Movie } from 'src/entities/movies';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }
  //nest.js는 타입을 받아서 넘겨줄 때 자동으로 타입도 변환시켜준다. Transform을 사용하기 때문이다.
  getOne(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    return movie;
  }
  deleteOne(id: number) {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== id);
  }
  create(movieData: CreateMovieDto) {
    this.movies.push({ id: this.movies.length + 1, ...movieData });
  }
  update(id: bynvwe, updateData) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ...movie, ...updateData }); // DB를 쓰면 달라진다.
  }
}
