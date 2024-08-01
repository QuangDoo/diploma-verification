type ApiResponse<TItem> = {
  Code: number;
  Message: string;
  Item: TItem;
  ItemExcelError: object;
  ExMessage: string;
};
