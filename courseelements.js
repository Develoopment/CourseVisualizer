var courses = {
    nodes: [
        { data: { id: 'Honors English 1', name: "Honors English 1", weightage: "Honors", minGradeToEnroll: 9}},
        { data: { id: 'Honors English 2', name: "Honors English 2", weightage: "Honors", minGradeToEnroll: 10} },
        { data: { id: 'Honors English 3', name: "Honors English 3", weightage: "Honors", minGradeToEnroll: 11} },
        { data: { id: 'Honors English 4', name: "Honors English 4", weightage: "Honors", minGradeToEnroll: 12} },
        { data: { id: 'AP Language and Composition', name: "AP Language and Composition", weightage: "AP", minGradeToEnroll: 9} },
        { data: { id: 'AP Literature', name: "AP Literature", weightage: "AP"} },
        
        { data: { id: 'English 1 On Level', name: "English 1 On Level", weightage: "On-Level", minGradeToEnroll: 9}},
        { data: { id: 'English 2 On Level', name: "English 2 On Level", weightage: "On-Level", minGradeToEnroll: 10}},
        { data: { id: 'English 3 On Level', name: "English 3 On Level", weightage: "On-Level", minGradeToEnroll: 11}},
        { data: { id: 'English 4 On Level', name: "English 4 On Level", weightage: "On-Level", minGradeToEnroll: 12}},

        { data: { id: 'Humanities GT', name: "Humanities GT", weightage: "AP", minGradeToEnroll: 9}},
        { data: { id: 'Humanities 2 GT', name: "Humanities 2 GT", weightage: "AP", minGradeToEnroll: 10}},
        { data: { id: 'American Studies GT', name: "American Studies GT", weightage: "AP", minGradeToEnroll: 11}},

        { data: { id: 'Dual Credit English 1301/1302', name: "Dual Credit English 1301/1302", weightage: "AP", minGradeToEnroll: 11}},
        { data: { id: 'Dual Credit English 2322/2323', name: "Dual Credit English 2322/2323", weightage: "AP", minGradeToEnroll: 11}},
    ],
    edges: [

        {data: {
        // id: 'heng1-heng',
        source: 'Honors English 1',
        target: 'Honors English 2'
        }},
        {data: {
        // id: 'heng1-heng',
        source: 'Honors English 2',
        target: 'Honors English 3'
        }},
        {data: {
        // id: 'heng1-heng',
        source: 'Honors English 3',
        target: 'Honors English 4'
        }},
        {data: {
        // id: 'heng1-heng',
        source: 'Honors English 4',
        target: 'AP Language and Composition'
        }},
        {data: {
        // id: 'heng1-heng',
        source: 'English 1 On Level',
        target: 'English 2 On Level'
        }},
        {data: {
        // id: 'heng1-heng',
        source: 'English 2 On Level',
        target: 'English 3 On Level'
        }},
        {data: {
        // id: 'heng1-heng',
        source: 'English 3 On Level',
        target: 'English 4 On Level'
        }},
        {data: {
        // id: 'heng1-heng',
        source: 'Honors English 3',
        target: 'AP Language and Composition'
        }},
        {data: {
        // id: 'heng1-heng',
        source: 'AP Language and Composition',
        target: 'AP Literature'
        }},
        

        {data: {
        // id: 'heng1-heng',
            source: 'Honors English 2',
            target: 'AP Language and Composition'
        }},
        
        {data: {
            // id: 'heng1-heng',
            source: 'Humanities GT',
            target: 'Humanities 2 GT'
        }},
        {data: {
            // id: 'heng1-heng',
            source: 'Dual Credit English 1301/1302',
            target: 'Dual Credit English 2322/2323'
        }},
        {data: {
            // id: 'heng1-heng',
            source: 'Humanities 2 GT',
            target: 'American Studies GT'
        }},
        {data: {
            // id: 'heng1-heng',
            source: 'American Studies GT',
            target: 'AP Literature'
        }},
        {data: {
            // id: 'heng1-heng',
            source: 'Honors English 2',
            target: 'Dual Credit English 1301/1302'
        }},

        {data: {
            // id: 'heng1-heng',
            source: 'English 1 On Level',
            target: 'Honors English 2'
        }},
        {data: {
            // id: 'heng1-heng',
            source: 'English 2 On Level',
            target: 'Honors English 3'
        }},
        {data: {
            // id: 'heng1-heng',
            source: 'English 3 On Level',
            target: 'Honors English 4'
        }},
    ]
}