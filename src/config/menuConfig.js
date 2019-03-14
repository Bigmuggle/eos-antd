const menuList = [
    {
        title:'首页',
        Icon:'edit',
        key:'/admin/home'
    }, 
    {
        title:'UI',
        Icon:'copy',
        key:'/admin/UI',
        Children:[
            {
                title:'option1',
                key:'/admin/UI/option1'
            },
            {
                title:'option2',
                key:'/admin/UI/option2'
            },
            {
                title:'option3',
                key:'/admin/UI/option3'
            }, 
            {
                title:'option4',
                key:'/admin/UI/option4'
            }
        ]
    },
    {
        title:'图表',
        Icon:'snippets',
        key:'/admin/tubiao',
        Children:[
            {
                title:'option1',
                key:'/admin/option1'
            },
            {
                title:'option2',
                key:'/admin/option2'
            },
            {
                title:'option3',
                key:'/admin/option3'
            }, 
            {
                title:'option4',
                key:'/admin/option4'
            }
        ]
    },
    {
        title:'anniu',
        Icon:'highlight',
        key:'/admin/anniu',
        Children:[
            {
                title:'option1',
                key:'/admin/option1'
            },
            {
                title:'option2',
                key:'/admin/option2'
            },
            {
                title:'option3',
                key:'/admin/option3'
            }, 
            {
                title:'option4',
                key:'/admin/option4'
            }
        ]
    },
    {
        title:'设置',
        Icon:'file-ppt',
        key:'/admin/shezhi'
    }
]
   
export default menuList