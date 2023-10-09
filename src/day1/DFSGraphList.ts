function visit(
    graph: WeightedAdjacencyList,
    seen: boolean[],
    source: number,
    needle: number,
    path: number[],
): boolean {
    const node = graph[source];

    let isPath = false;

    seen[source] = true;

    for (const child of node) {
        if (seen[child.to]) {
            continue;
        }

        isPath = visit(graph, seen, child.to, needle, path);
    }

    if (source === needle || isPath) {
        path.push(source);

        return true;
    }

    return isPath;
}

export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    const path: number[] = [];
    const seen = new Array(graph.length).fill(false);

    seen[source] = true;

    visit(graph, seen, source, needle, path);

    if (!path.length) {
        return null;
    }

    return path.reverse();
}
