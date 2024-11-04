import { app, InvocationContext, Timer } from "@azure/functions";
import { CronJob } from 'cron';

// Function to create a cron schedule string from natural language input
function createCronScheduleFromNaturalLanguage(naturalLanguage: string): string {
    const cronJob = new CronJob(naturalLanguage, () => {});
    const cronSource = cronJob.cronTime.source;
    if (typeof cronSource === 'string') {
        return cronSource;
    } else {
        throw new Error('Cron schedule is not a string');
    }
}

export async function timer_scheduledtask(myTimer: Timer, context: InvocationContext): Promise<void> {
    context.log('Timer function processed request.');
}

// Example usage of createCronScheduleFromNaturalLanguage function
const cronSchedule = createCronScheduleFromNaturalLanguage('every 30 minutes'); // Converts natural language to cron schedule

app.timer('timer_scheduledtask', {
    schedule: cronSchedule, // Use the generated cron schedule here
    handler: timer_scheduledtask
});
