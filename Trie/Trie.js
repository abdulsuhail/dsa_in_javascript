class Node {

    constructor()
    {
        this.keys = new Map();
        this.isEnd = false;
    }


}

class Trie {

    constructor()
    {
        this.root = new Node();

    }



    addWord = (word) =>{

        let word_arr = word.split('');
        let node = this.root;
        let i;
        for(i=0;i<word_arr.length;i++)
        {
            if(node.keys.has(word_arr[i]))
            {
                node = node.keys.get(word_arr[i]);
            }
            else
            {
                node.keys.set(word_arr[i],new Node());
                node = node.keys.get(word_arr[i]);
            }
        }
        node.isEnd = true;
    }
    isWord = (word) =>{

        let node = this.root;
        while(word.length > 1)
        {
            if(!node.keys.has(word[0]))
                return false;
            else
            {
                node = node.keys.get(word[0]);
                word = word.substring(1);
            }
        }

        return node.keys.has(word) && node.keys.get(word).isEnd;
    }

    print = () => {
		let words = [];
		let search = function(node, string) {
			if (node.keys.size != 0) {
				for (let letter of node.keys.keys()) {
					search(node.keys.get(letter), string.concat(letter));
				};
				if (node.isEnd) {
					words.push(string);
				};
			} else {
				string.length > 0 ? words.push(string) : undefined;
				return;
			};
		};
		search(this.root, '');
		return words.length > 0 ? words : null;
	};

}

module.exports = Trie;