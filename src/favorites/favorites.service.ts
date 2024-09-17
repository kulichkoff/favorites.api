import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { CreateShareLinkDto } from './dto/create-share-link.dto';
import { ShareDb } from 'src/db/db';

@Injectable()
export class FavoritesService {
  private readonly db = new ShareDb();

  createShare(createShareLinkDto: CreateShareLinkDto) {
    const result = this.db.create(createShareLinkDto.favorites);
    Logger.log(`Created new favorites share ${JSON.stringify(result)}`);
    return result;
  }

  findShare(id: string) {
    const found = this.db.find(id);

    if (found) {
      return found;
    } else {
      throw new HttpException(
        'Could not find share with id ' + id,
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
