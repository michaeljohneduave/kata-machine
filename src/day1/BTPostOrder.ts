function visit(node: BinaryNode<number>, path: number[]): number[] {
    if (!node) {
        return path;
    }

    if (node.left) {
        visit(node.left, path);
    }

    if (node.right) {
        visit(node.right, path);
    }

    path.push(node.value);

    return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    return visit(head, []);
}
