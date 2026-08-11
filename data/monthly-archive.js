// Historical monthly archive layer. Populate/replace entries from the extracted reports; UI code must never invent missing history.
export const monthlyArchive=[
 {month:'2025-07',label:'July 2025',summary:'The first recorded month in the extracted historical archive.',stats:{total:134,akshat:80,purvi:54,activeDays:2,mostActiveDay:'2025-07-30',mostActiveDayMessages:88},events:[],phrases:[],nicknames:[],repeatedWords:[],loveMentions:[],conversations:[]}
];
export function archiveStats(){return monthlyArchive.reduce((a,m)=>({messages:a.messages+m.stats.total,months:a.months+1,activeDays:a.activeDays+m.stats.activeDays}),{messages:0,months:0,activeDays:0})}
