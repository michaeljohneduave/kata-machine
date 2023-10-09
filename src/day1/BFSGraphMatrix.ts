export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const queue = [source];
    const prev = new Array(graph.length).fill(-1);
    const seen = new Array(graph.length).fill(false);
    const path = [];

    seen[source] = true;

    do {
        const node = queue.shift() as number;
        if (node === needle) {
            break;
        }

        for (let i = 0; i < graph[node].length; i += 1) {
            const child = graph[node][i];

            if (seen[i]) {
                continue;
            }

            if (child) {
                seen[i] = true;
                prev[i] = node;
                queue.push(i);
            }
        }
    } while (queue.length);

    // Not visited the needle node
    if (prev[needle] === -1) {
        return null;
    }

    // Assemble path array
    path.push(needle);
    let ptr = needle;
    while (prev[ptr] !== -1) {
        path.unshift(prev[ptr]);
        ptr = prev[ptr];
    }

    return path;
}
