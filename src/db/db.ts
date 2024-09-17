import { nanoid } from 'nanoid';

export interface FavoritesShareModel {
  id: string;
  favorites: string[];
}

export class ShareDb {
  private _storage: FavoritesShareModel[] = [];

  private static _instance?: ShareDb;

  public static getInstance(): ShareDb {
    if (!this._instance) {
      return new ShareDb();
    } else {
      return this._instance;
    }
  }

  public create(favorites: string[]): FavoritesShareModel {
    const newItem = {
      id: nanoid(),
      favorites,
    };

    this._storage.push(newItem);

    return newItem;
  }

  public find(id: string): FavoritesShareModel | null {
    return this._storage.find((shareitem) => shareitem.id === id) ?? null;
  }
}
