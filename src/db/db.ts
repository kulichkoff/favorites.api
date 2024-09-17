import { nanoid } from 'nanoid';

// just for testing don't use it in prod
const sleep = (time: number) => new Promise((res) => setTimeout(res, time));

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

  public async create(favorites: string[]): Promise<FavoritesShareModel> {
    const newItem = {
      id: nanoid(),
      favorites,
    };

    await sleep(2000); // ! just for testing

    this._storage.push(newItem);

    return newItem;
  }

  public find(id: string): FavoritesShareModel | null {
    return this._storage.find((shareitem) => shareitem.id === id) ?? null;
  }
}
