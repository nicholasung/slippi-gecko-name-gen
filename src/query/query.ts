export class QueryHandler {
    private data: string;
  
    constructor(data: string) {
      this.data = data;
    }
  
    query(item: (item: string) => string): string {
      return item(this.data);
    }
  }
  