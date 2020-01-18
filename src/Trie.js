import TrieNode from './TrieNode';

const HEAD_CHAR = '$';
const END_CHAR = '%';

class Trie {

    constructor() {
        this.head = new TrieNode(HEAD_CHAR);
    }

    addWord(word) {
        let node = this.head;
        for (let i = 0; i < word.length; i++) {
            node = node.addChild(word.charAt(i));
        }
        node.addChild(END_CHAR);
    }

    search(word) {
        let node = this.head, i = 0;
        while (i < word.length && node !== null) {
            node = node.getChild(word.charAt(i++));
        }
        if (node === null || node === this.head) return [];
        const prefix = word.substring(0, i - 1);
        return node.getWords(prefix);
    }
}

export default Trie;