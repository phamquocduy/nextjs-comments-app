export function getFakeUser() {
  return {
    name: "Daniela Metz",
    href: "#",
    email: "abc.xyz@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };
}

export function getFakeArticle() {
  return {
    category: { name: "Case Study", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    createAt: "20. 01. 2022 15:34",
    readingTime: "5 min",
  };
}

export function getFakeComments() {
  return [
    {
      id: 1,
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut  labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
    {
      id: 2,
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut  labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
  ];
}
