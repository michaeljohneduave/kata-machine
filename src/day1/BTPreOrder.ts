function visit(curr: BinaryNode<number>, path: number[]): number[] {
    if (!curr) {
        return path;
    }

    path.push(curr.value);

    if (curr.left) {
        visit(curr.left, path);
    }

    if (curr.right) {
        visit(curr.right, path);
    }

    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return visit(head, []);
}
