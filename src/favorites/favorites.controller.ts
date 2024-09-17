import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { CreateShareLinkDto } from './dto/create-share-link.dto';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post('share')
  createShare(@Body() createShareLinkDto: CreateShareLinkDto) {
    return this.favoritesService.createShare(createShareLinkDto);
  }

  @Get('share/:id')
  findShare(@Param('id') id: string) {
    return this.favoritesService.findShare(id);
  }
}
