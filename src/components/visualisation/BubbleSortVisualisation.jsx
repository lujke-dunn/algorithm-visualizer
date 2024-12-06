import { SortingVisualizer } from './SortingVisualizer';

const bubbleSortAlgorithm = async (array, { setArray, setComparing, setSwapping, speed }) => {
    const arr = [...array];
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            setComparing([j, j + 1]);
            await new Promise(resolve => setTimeout(resolve, speed));
            // delaying each swap and compare algorithm to a set speed so it can be shown
            if (arr[j] > arr[j + 1]) {
                setSwapping([j, j + 1]);
                await new Promise(resolve => setTimeout(resolve, speed / 2));
                
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                setArray([...arr]);
                
                await new Promise(resolve => setTimeout(resolve, speed / 2));
                setSwapping([]);
            }
        }
    }
};

export default function BubbleSortVisualisation() {
    return (
        <SortingVisualizer
            title="bubble sort"
            sortingFunction={bubbleSortAlgorithm}
        />
    );
}