class TrieNode {
    constructor(c) {
        this.value = c;
        this.children = [];
    }

    addChild(c) {
        let child = this.getChild(c);
        if (child !== null) return child;
        child = new TrieNode(c);
        this.children.push(child);
        return child;
    }

    getChild(c) {
        for (let child of this.children) {
            if (child.value === c) return child;
        }
        return null;
    }

    isEnd() {
        return this.value === '%';
    }

    getWords(prefix) {
        const words = [];
        this.getWordsAux(this, words, prefix);
        return words;
    }

    getWordsAux(node, words, word) {
        if (node.isEnd()) {
            words.push(word);
            return;
        }
        word += node.value;
        for (let child of node.children) {
            this.getWordsAux(child, words, word);
        }
    }

}

export default TrieNode;