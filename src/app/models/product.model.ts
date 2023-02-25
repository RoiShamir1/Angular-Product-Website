class Product {
  constructor(
    public id = 0,
    public name = '',
    public datePublished = new Date().toLocaleDateString(),
    public imageUrl = 'https://kleosafrica.com/blog/wp-content/uploads/2019/10/Product-Review-Writing-Services.jpg',
    public price = 0,
    public description = '',
    public city = '',
    public phoneNum = ''
  ) {}
}

export default Product;
