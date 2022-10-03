import Member from "./Member";

export default interface Dinner {
    members: Member[];
    menu: string[];
    shuffle: (array: any[]) => any[];
    organize: (array: Member[]) => void;
}