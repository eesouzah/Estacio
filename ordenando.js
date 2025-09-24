const swap = (vetor, pos1, pos2) => {
    let temp = vetor[pos1];
    vetor[pos1] = vetor[pos2];
    vetor[pos2] = temp;
    return vetor;
};

const shuffle = (vetor, qtdTrocas) => {
    for (let i = 0; i < qtdTrocas; i++) {
        let posAleatoria1 = Math.floor(Math.random() * vetor.length);
        let posAleatoria2 = Math.floor(Math.random() * vetor.length);
        swap(vetor, posAleatoria1, posAleatoria2);
    }
    return vetor;
};

const bubble_sort = (vetor) => {
    let n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                swap(vetor, j, j + 1);
            }
        }
    }
    return vetor;
};

const selection_sort = (vetor) => {
    let n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (vetor[j] < vetor[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(vetor, i, minIndex);
        }
    }
    return vetor;
};

const particionamento = (vetor, inicio, fim, pivot) => {
    let pivotIndex = inicio;
    for (let i = inicio; i < fim; i++) {
        if (vetor[i] <= pivot) {
            swap(vetor, i, pivotIndex);
            pivotIndex++;
        }
    }
    swap(vetor, pivotIndex, fim);
    return pivotIndex
};

const quick_sort = (vetor, inicio = 0, fim = vetor.length - 1) => {
    if (inicio < fim) {
        let pivot = vetor[fim];
        let posPivot = particionamento(vetor, inicio, fim, pivot);
        quick_sort(vetor, inicio, posPivot - 1);
        quick_sort(vetor, posPivot + 1, fim);
    }
    return vetor;
};

let teste = [64, 34, 25, 12, 22, 11, 90];
console.log("Original:", teste);
console.log("Bubble:", bubble_sort([...teste]));