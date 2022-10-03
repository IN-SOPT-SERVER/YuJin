import Member from "./Member";

export default interface Dinner {
    members: Member[];
    shuffle: (array: Member[]) => Member[];
    organize: (array: Member[]) => void;
}