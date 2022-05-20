export class Pagination {
  page: number;
  totalItems?: number;
  pageSize: number;
  filter?: string;
}

export class PagedList<T> {
  items?: T[];
  page?: number;
  filter?: string;
  pageSize?: number;
  totalItems?: number;
}
