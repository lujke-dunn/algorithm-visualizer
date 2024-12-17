import React from 'react';
import { motion } from "framer-motion";

export default function BubbleSortInformation() {
    const [selectedLanguage, setSelectedLanguage] = React.useState('pseudo');

    const codeExamples = {
        pseudo: `procedure bubbleSort(A: list of sortable items)
    n = length(A)
    repeat
        swapped = false
        for i = 1 to n-1
            if A[i-1] > A[i] then
                swap(A[i-1], A[i])
                swapped = true
            end if
        end for
        n = n-1
    until not swapped
end procedure`,
        
        javascript: `function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    
    do {
        swapped = false;
        for(let i = 1; i < n; i++) {
            if(arr[i-1] > arr[i]) {
                [arr[i-1], arr[i]] = [arr[i], arr[i-1]];
                swapped = true;
            }
        }
        n--;
    } while(swapped);
    
    return arr;
}`,

        python: `def bubble_sort(arr):
    n = len(arr)
    while True:
        swapped = False
        for i in range(1, n):
            if arr[i-1] > arr[i]:
                arr[i-1], arr[i] = arr[i], arr[i-1]
                swapped = True
        n -= 1
        if not swapped:
            break
    return arr`,

        java: `public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        boolean swapped;
        
        do {
            swapped = false;
            for (int i = 1; i < n; i++) {
                if (arr[i-1] > arr[i]) {
                    // Swap elements
                    int temp = arr[i-1];
                    arr[i-1] = arr[i];
                    arr[i] = temp;
                    swapped = true;
                }
            }
            n--;
        } while (swapped);
    }
}`,

        go: `func bubbleSort(arr []int) []int {
    n := len(arr)
    for {
        swapped := false
        for i := 1; i < n; i++ {
            if arr[i-1] > arr[i] {
                arr[i-1], arr[i] = arr[i], arr[i-1]
                swapped = true
            }
        }
        n--
        if !swapped {
            break
        }
    }
    return arr
}`
    };

    return (
        <div className="flex flex-col md:flex-row gap-4 p-4">
            <div className="md:w-1/2">
          
                <div className="mb-4 flex gap-2">
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedLanguage('pseudo')}
                        className={`p-2 rounded ${
                            selectedLanguage === 'pseudo' 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-gray-200 text-gray-700'
                        }`}
                    >
                        <span className="font-mono text-lg">&lt;&gt;</span>
                    </motion.button>
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedLanguage('javascript')}
                        className={`p-2 rounded ${
                            selectedLanguage === 'javascript' 
                            ? 'bg-blue-500' 
                            : 'bg-gray-200'
                        }`}
                    >
                        <img 
                            src="/icons/javascript.png" 
                            alt="JavaScript" 
                            className="w-6 h-6"
                        />
                    </motion.button>
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedLanguage('python')}
                        className={`p-2 rounded ${
                            selectedLanguage === 'python' 
                            ? 'bg-blue-500' 
                            : 'bg-gray-200'
                        }`}
                    >
                        <img 
                            src="/icons/python.png" 
                            alt="Python" 
                            className="w-6 h-6"
                        />
                    </motion.button>
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedLanguage('java')}
                        className={`p-2 rounded ${
                            selectedLanguage === 'java' 
                            ? 'bg-blue-500' 
                            : 'bg-gray-200'
                        }`}
                    >
                        <img 
                            src="/icons/java.png" 
                            alt="Java" 
                            className="w-6 h-6"
                        />
                    </motion.button>
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedLanguage('go')}
                        className={`p-2 rounded ${
                            selectedLanguage === 'go' 
                            ? 'bg-blue-500' 
                            : 'bg-gray-200'
                        }`}
                    >
                        <img 
                            src="/icons/go.png" 
                            alt="Go" 
                            className="w-6 h-6"
                        />
                    </motion.button>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg font-mono">
                    <pre className="whitespace-pre-wrap text-black">
                        {codeExamples[selectedLanguage]}
                    </pre>
                </div>
            </div>

            
            <div className="md:w-1/2 text-black">
                <h2 className="text-2xl font-bold mb-4">Bubble Sort Algorithm</h2>
                <p className="text-black mb-4">
                    Bubble Sort is a sorting algorithm that repeatedly steps through the list, 
                    compares adjacent elements and swaps them if they are in the wrong order. The pass 
                    through the list is repeated until no swaps are needed.
                </p>
                <h3 className="text-xl font-semibold mb-2">Time Complexity</h3>
                <ul className="list-disc pl-5 mb-4">
                    <li>Best Case: O(n) - when array is already sorted</li>
                    <li>Average Case: O(n²)</li>
                    <li>Worst Case: O(n²)</li>
                </ul>
                <h3 className="text-xl font-semibold mb-2">Space Complexity</h3>
                <p className="text-black">O(1) - only requires a single additional memory space for swapping</p>
            </div>
        </div>
    )
}