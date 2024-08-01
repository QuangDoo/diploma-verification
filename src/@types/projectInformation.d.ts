type Information = {
  GioiThieu: {
    Value: {
      Value: string;
      Title: string;
    };
  };
  CreateDateTime: string;
  CreateDateTime_Text: string;
  DeleteAble: boolean;
  Id: string;
  IsDeleted: boolean;
  Key: string;
  Value: {
    Title: string;
    Value: string;
  };
  LienHe: {
    CoQuanChuQuan: string;
    DiaChi: string;
    Email: string;
    SoDienThoai: string;
    AvatarLink: string;
  };
  Menu: {
    Code: '01' | '02' | '03' | '04' | '05';
    Name: string;
    IsActive: boolean;
    ListChilds: Array<{
      Code: string;
      Name: string;
      IsActive: boolean;
      ListChilds: Information['Menu'][0]['ListChilds'];
    }>;
  }[];
};
