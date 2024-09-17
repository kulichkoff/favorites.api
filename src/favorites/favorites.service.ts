import { Injectable } from '@nestjs/common';
import { CreateShareLinkDto } from './dto/create-share-link.dto';

@Injectable()
export class FavoritesService {
  createShare(createShareLinkDto: CreateShareLinkDto) {
    return 'This action adds a new share';
  }

  findShare(id: string) {
    return `This action returns a #${id} share`;
  }
}
