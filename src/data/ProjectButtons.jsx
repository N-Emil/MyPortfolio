import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

export const getProjectButtons = (project) => [
    { 
        id: 'open',
        label: 'Open project', 
        url: project.app_url, 
        icon: <FaExternalLinkAlt className='text-xs' />, 
        btnStyle: 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/60'
    },
    { 
        id: 'github',
        label: 'Source code', 
        url: project.github_url, 
        icon: <FaGithub className='text-base' />, 
        btnStyle: 'bg-indigo-950 hover:bg-indigo-900 text-indigo-200 border border-indigo-800', 
        iconStyle: 'bg-indigo-900 text-indigo-300 border border-indigo-700' 
    }
]