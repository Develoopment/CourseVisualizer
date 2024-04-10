var courses = {
    nodes: [
        { data: { id: '1.00', name: "Honors English 1", weightage: "Honors"}},
        { data: { id: '1.01', name: "Honors English 2", weightage: "Honors"} },
        { data: { id: '1.02', name: "Honors English 3", weightage: "Honors"} },
        { data: { id: '1.03', name: "Honors English 4", weightage: "Honors"} },
        { data: { id: '1.04', name: "AP Language and Composition", weightage: "AP"} },
        { data: { id: '1.05', name: "AP Literature", weightage: "AP"} },
        { data: { id: '1.06', name: "Dual Credit British Literature", weightage: "AP"} },
        
        { data: { id: '1.07', name: "English 1 On Level", weightage: "On-Level"}},
        { data: { id: '1.08', name: "English 2 On Level", weightage: "On-Level"}},
        { data: { id: '1.09', name: "English 3 On Level", weightage: "On-Level"}},
        { data: { id: '1.10', name: "English 4 On Level", weightage: "On-Level"}},

        { data: { id: '1.11', name: "Humanities GT", weightage: "AP"}},
        { data: { id: '1.12', name: "Humanities 2 GT", weightage: "AP"}},
        { data: { id: '1.13', name: "American Studies GT", weightage: "AP"}},

        { data: { id: '1.14', name: "Dual Credit English 1301/1302", weightage: "AP"}},
        { data: { id: '1.15', name: "Dual Credit English 2322/2323", weightage: "AP"}},
    ],
    edges: [

        {data: {
        // id: 'heng1-heng',
        source: '1.00',
        target: '1.01'
        }},
        {data: {
        // id: 'heng1-heng',
        source: '1.01',
        target: '1.02'
        }},
        {data: {
        // id: 'heng1-heng',
        source: '1.02',
        target: '1.03'
        }},
        {data: {
        // id: 'heng1-heng',
        source: '1.03',
        target: '1.04'
        }},
        {data: {
        // id: 'heng1-heng',
        source: '1.07',
        target: '1.08'
        }},
        {data: {
        // id: 'heng1-heng',
        source: '1.08',
        target: '1.09'
        }},
        {data: {
        // id: 'heng1-heng',
        source: '1.09',
        target: '1.10'
        }},
        {data: {
        // id: 'heng1-heng',
        source: '1.02',
        target: '1.04'
        }},
        {data: {
        // id: 'heng1-heng',
        source: '1.04',
        target: '1.05'
        }},
        
        {data: {
        // id: 'heng1-heng',
        source: '1.04',
        target: '1.06'
        }},
        {data: {
        // id: 'heng1-heng',
        source: '1.01',
        target: '1.04'
        }},
        
        {data: {
            // id: 'heng1-heng',
            source: '1.11',
            target: '1.12'
        }},
        {data: {
            // id: 'heng1-heng',
            source: '1.14',
            target: '1.15'
        }},
        {data: {
            // id: 'heng1-heng',
            source: '1.12',
            target: '1.13'
        }},
        {data: {
            // id: 'heng1-heng',
            source: '1.13',
            target: '1.05'
        }},
        {data: {
            // id: 'heng1-heng',
            source: '1.01',
            target: '1.14'
        }},

        {data: {
            // id: 'heng1-heng',
            source: '1.07',
            target: '1.01'
        }},
        {data: {
            // id: 'heng1-heng',
            source: '1.08',
            target: '1.02'
        }},
        {data: {
            // id: 'heng1-heng',
            source: '1.09',
            target: '1.03'
        }},
    ]
}