const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Salvador Dalí', price: 0, segment: 'Consultoria'},
        'task-2': { id: 'task-2', content: 'Pablo Picasso', price: 229 , segment: 'Comércio'},
        'task-3': { id: 'task-3', content: 'Joan Miró', price: 0, segment: 'Consultoria'},
        'task-4': { id: 'task-4', content: 'René Magritte', price: 0, segment: 'Comércio '},
        'task-5': { id: 'task-5', content: 'Frida Kahlo', price: 229, segment: 'Restaurante'},
        'task-6': { id: 'task-6', content: 'André Breton', price: 0, segment: 'Consultoria'},
        'task-7': { id: 'task-7', content: 'Max Ernst', price: 0, segment: 'Consultoria'},
        'task-8': { id: 'task-8', content: 'Marc Chagall', price: 350, segment: 'Restaurante'},
        'task-9': { id: 'task-9', content: 'Marcel Duchamp', price: 350, segment: 'Consultoria'},
        'task-10': { id: 'task-10', content: 'Man Ray', price: 350, segment: 'Comércio'},
        'task-11': { id: 'task-11', content: 'Giorgio de Chirico', price: 0, segment: 'Comércio'},
        'task-12': { id: 'task-12', content: 'Vladimir Kush', price: 0, segment: 'Comércio'},
        'task-13': { id: 'task-13', content: 'Leonora Carrington', price: 350, segment: 'Comércio'},
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Qualificação/agendamento',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5', 'task-11', 'task-12'], 
        },
        'column-2': {
            id: 'column-2',
            title: 'Diagnóstico',
            taskIds: ['task-6', 'task-7', 'task-8', 'task-13'], 
        },
        'column-3': {
            id: 'column-3',
            title: 'Demonstração do sistema',
            taskIds: ['task-9', 'task-10'], 
        },
        'column-4': {
            id: 'column-4',
            title: 'Fechamento',
            taskIds: [], 
        }
    },
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
}

export default initialData;