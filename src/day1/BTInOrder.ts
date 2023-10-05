function visit(node: BinaryNode<number>, path: number[]): number[] {
    if (!node) {
        return path;
    }

    if (node.left) {
        visit(node.left, path);
    }

    path.push(node.value);

    if (node.right) {
        visit(node.right, path);
    }

    return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    return visit(head, []);
}
