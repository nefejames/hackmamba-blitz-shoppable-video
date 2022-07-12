const shoppable = {
  products: [
    {
      productId: 1,
      productName: "Dog One",
      publicId:
        "https://res.cloudinary.com/nefejames/image/upload/v1632500955/Hackmamba/Images/pet9.jpg",
      onClick: {
        action: "goto",
        pause: true,
        args: {
          url: "/product/dog-one",
        },
      },
    },
    {
      productId: 2,
      productName: "Dog Two",

      publicId:
        "https://res.cloudinary.com/nefejames/image/upload/v1632500949/Hackmamba/Images/pet4.jpg",
      onClick: {
        action: "goto",
        pause: true,
        args: {
          url: "/product/dog-two",
        },
      },
    },
  ],
}

export default shoppable
