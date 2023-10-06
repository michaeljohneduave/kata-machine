function visit(node: BinaryNode<number> | null, needle: number): boolean {
    if (!node) {
        return false;
    }

    if (node.value === needle) {
        return true;
    }

    // right side
    if (node.value < needle) {
        return visit(node.right, needle);
    }

    // left side
    if (node.value >= needle) {
        return visit(node.left, needle);
    }

    return false;
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return visit(head, needle);
}
