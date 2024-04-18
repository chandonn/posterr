import { User } from "../models/User";

export const users: User[] = [
  {
    uuid: "885ace29-cd8f-4032-b325-52243d46dac2",
    username: "frodo",
    name: "Frodo Baggins",
    createdOn: new Date("01/01/2020").valueOf(),
    profilePicture: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/12/the-lord-of-the-rings-the-two-towers-the-extended-edition-frodo-elijah-wood.jpg",
    profileBanner: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/12/the-lord-of-the-rings-the-two-towers-the-extended-edition-frodo-elijah-wood.jpg",
    followers: ["4be1ecfb-7ead-4ba1-972d-071c1caa230f", "82d27f58-87e3-46b4-8429-6bce9966e3a0"],
    following: ["4be1ecfb-7ead-4ba1-972d-071c1caa230f"],
    followersCount: 2,
    followingCount: 1,
  },
  {
    uuid: "4be1ecfb-7ead-4ba1-972d-071c1caa230f",
    username: "sam",
    name: "Samwise Gamgee",
    createdOn: new Date("01/05/2022").valueOf(),
    profilePicture: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/03/samwise.png",
    profileBanner: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/03/samwise.png",
    followers: ["885ace29-cd8f-4032-b325-52243d46dac2", "82d27f58-87e3-46b4-8429-6bce9966e3a0"],
    following: ["82d27f58-87e3-46b4-8429-6bce9966e3a0"],
    followersCount: 2,
    followingCount: 1,
  },
  {
    uuid: "82d27f58-87e3-46b4-8429-6bce9966e3a0",
    username: "thegray",
    name: "Gandalf The Gray",
    createdOn: new Date("05/08/2023").valueOf(),
    profilePicture: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Gandalf600ppx.jpg/170px-Gandalf600ppx.jpg",
    profileBanner: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Gandalf600ppx.jpg/170px-Gandalf600ppx.jpg",
    followers: [ "4be1ecfb-7ead-4ba1-972d-071c1caa230f"],
    following: ["885ace29-cd8f-4032-b325-52243d46dac2"],
    followersCount: 1,
    followingCount: 1,
  },
  {
    uuid: "984a2931-b673-4645-b3e4-f8a69219841f",
    profilePicture: "https://picsum.photos/75/75",
    profileBanner: "https://picsum.photos/650/250",
    createdOn: new Date("01/01/2020").valueOf(),
    name: "Haynes Hyde",
    username: "haynes",
    followers: [
      "885ace29-cd8f-4032-b325-52243d46dac2",
      "4be1ecfb-7ead-4ba1-972d-071c1caa230f",
      "82d27f58-87e3-46b4-8429-6bce9966e3a0",
    ],
    following: [
      "885ace29-cd8f-4032-b325-52243d46dac2",
      "4be1ecfb-7ead-4ba1-972d-071c1caa230f",
      "82d27f58-87e3-46b4-8429-6bce9966e3a0",
    ],
    followersCount: 3,
    followingCount: 3
  },
  {
    uuid: "a3123669-d55f-4f3d-bc57-27d18243ae50",
    profilePicture: "https://picsum.photos/75/75",
    profileBanner: "https://picsum.photos/650/250",
    createdOn: new Date("01/01/2020").valueOf(),
    name: "Ware Woodard",
    username: "ware",
    followers: [
      "885ace29-cd8f-4032-b325-52243d46dac2",
      "4be1ecfb-7ead-4ba1-972d-071c1caa230f",
      "82d27f58-87e3-46b4-8429-6bce9966e3a0",
    ],
    following: [
    "885ace29-cd8f-4032-b325-52243d46dac2",
    "4be1ecfb-7ead-4ba1-972d-071c1caa230f",
    "82d27f58-87e3-46b4-8429-6bce9966e3a0",
    ],
    followersCount: 3,
    followingCount: 3
  },
  {
    uuid: "662d5c5f-3e2a-4071-999f-b45be6a29cf8",
    profilePicture: "https://picsum.photos/75/75",
    profileBanner: "https://picsum.photos/650/250",
    createdOn: new Date("01/01/2020").valueOf(),
    name: "Kelly Parrish",
    username: "kelly",
    followers: [
      "885ace29-cd8f-4032-b325-52243d46dac2",
      "4be1ecfb-7ead-4ba1-972d-071c1caa230f",
      "82d27f58-87e3-46b4-8429-6bce9966e3a0",
    ],
    following: [
      "885ace29-cd8f-4032-b325-52243d46dac2",
      "4be1ecfb-7ead-4ba1-972d-071c1caa230f",
      "82d27f58-87e3-46b4-8429-6bce9966e3a0",
    ],
    followersCount: 3,
    followingCount: 3
  },
  {
    uuid: "c8e8fd64-dc22-4bb1-a8cf-afdd7616800d",
    profilePicture: "https://picsum.photos/75/75",
    profileBanner: "https://picsum.photos/650/250",
    createdOn: new Date("01/01/2020").valueOf(),
    name: "Jenny Lamb",
    username: "jenny",
    followers: [
      "885ace29-cd8f-4032-b325-52243d46dac2",
      "4be1ecfb-7ead-4ba1-972d-071c1caa230f",
      "82d27f58-87e3-46b4-8429-6bce9966e3a0",
    ],
    following: [
      "885ace29-cd8f-4032-b325-52243d46dac2",
      "4be1ecfb-7ead-4ba1-972d-071c1caa230f",
      "82d27f58-87e3-46b4-8429-6bce9966e3a0",
    ],
    followersCount: 3,
    followingCount: 3
  },
  {
    uuid: "0ce9b4b6-5e81-4327-bf11-d03086604998",
    profilePicture: "https://picsum.photos/75/75",
    profileBanner: "https://picsum.photos/650/250",
    createdOn: new Date("01/01/2020").valueOf(),
    name: "Gates Gillespie",
    username: "gates",
    followers: [
      "885ace29-cd8f-4032-b325-52243d46dac2",
      "4be1ecfb-7ead-4ba1-972d-071c1caa230f",
      "82d27f58-87e3-46b4-8429-6bce9966e3a0",
    ],
    following: [
      "885ace29-cd8f-4032-b325-52243d46dac2",
      "4be1ecfb-7ead-4ba1-972d-071c1caa230f",
      "82d27f58-87e3-46b4-8429-6bce9966e3a0",
    ],
    followersCount: 3,
    followingCount: 3
  }
]