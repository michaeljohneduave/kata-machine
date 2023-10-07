type LetterNode = {
    value: number;
    children: (LetterNode | undefined)[];
    isWord?: boolean;
};

export default class Trie {
    private head: LetterNode;

    constructor() {
        this.head = {
            value: -1,
            children: [],
        };
    }

    private offset(char: string): number {
        return char.charCodeAt(0) - 97;
    }

    private onset(n: number): string {
        return String.fromCharCode(n + 97);
    }

    insert(item: string): void {
        let node = this.head;
        let i = 0;

        if (!item.length) return;

        for (const c of item) {
            i = this.offset(c);
            if (!node.children[i]) {
                node.children[i] = {
                    value: i,
                    children: [],
                };
            }

            node = node.children[i] as LetterNode;
        }

        node.isWord = true;
    }

    delete(item: string): void {
        this.deleteTraverse(this.head, item);
    }

    find(partial: string): string[] {
        let node = this.head;
        let i = 0;
        let words: string[] = [];

        for (const c of partial) {
            i = this.offset(c);
            if (node.children[i]) {
                node = node.children[i] as LetterNode;
            }
        }

        for (let i = 0; i < node.children.length; i += 1) {
            if (node.children[i]) {
                this.findTraverse(
                    node.children[i] as LetterNode,
                    words,
                    partial,
                );
            }
        }

        return words;
    }

    // This is a pre + recurse (DFS)
    findTraverse(node: LetterNode, words: string[], str: string = ""): void {
        str += this.onset(node.value);

        if (node.isWord) {
            words.push(str);
        }

        for (let i = 0; i < node.children.length; i += 1) {
            if (node.children[i]) {
                this.findTraverse(node.children[i] as LetterNode, words, str);
            }
        }

        return;
    }

    //This is a recurse + post (DFS)
    deleteTraverse(node: LetterNode, str: string): void {
        if (!node.children.length) {
            return;
        }

        const v = this.offset(str);

        if (node.children[v]) {
            this.deleteTraverse(node.children[v] as LetterNode, str.slice(1));

            // delete the child
            if (str.length === 1) {
                if (!node.children[v]?.children.length) {
                    node.children[v] = undefined;
                } else if (node.children[v]) {
                    const child = node.children[v] as LetterNode;
                    child.isWord = false;
                }
            }
        }

        return;
    }
}
