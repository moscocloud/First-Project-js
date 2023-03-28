export class TransformService {
  static fbObjectToArray(fbData) { // fb - fireBase
    return Object.keys(fbData).map(key => {
      const item = fbData[key];
      item.id = key;
      return item;
    });
  }
}