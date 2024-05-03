import { useTranslations } from 'next-intl';
import { BsListTask } from 'react-icons/bs';
import { Editor as EditorProps } from '@tiptap/react';

export interface IPostTemplateProps {
  editor: EditorProps | undefined;
}

export default function PostTemplate({ editor }: IPostTemplateProps) {
  const t = useTranslations();


  const BugTemplate: string = `<p>******* ${t(
    'Bug Report'
  )} *******</p><p><strong>${t('Title')}:</strong></p><p><strong>${t(
    'Severity'
  )}:</strong></p><p><strong>${t('Version')}:</strong></p><p><strong>${t(
    'Operating System'
  )}:</strong></p><p><strong>${t('Browser')}:</strong></p><p><strong>${t(
    'Detailed Description'
  )}:</strong></p><ul><li><p><strong>${t(
    'Steps to reproduce the bug'
  )}:</strong></p><ol><li><p>&nbsp;</p></li><li><p>&nbsp;</p></li><li><p>&nbsp;</p></li></ol></li><li><p><strong>${t(
    'Expected Behavior'
  )}:</strong></p></li><li><p><strong>${t(
    'Actual Behavior'
  )}:</strong></p></li><li><p><strong>${t(
    'Outcome'
  )}:</strong></p></li></ul><p><strong>${t(
    'Code/Screenshots/Videos'
  )}:</strong></p><p>[${t(
    'Attach code or screenshots or screencast videos of the bug if available'
  )}]</p><pre><code></code></pre><p><strong>${t(
    'Additional Information'
  )}:</strong></p><ul><li><p>&nbsp;</p></li><li><p>&nbsp;</p></li></ul><p><strong>${t(
    'Contact'
  )}:</strong></p><ul><li><p>[${t('Your Name')}]</p></li><li><p>[${t(
    'Your Email'
  )}]</p></li></ul>`;

  const TaskTemplate: string = `<p>******* ${t(
    'Task'
  )} *******</p><p><strong>${t('Title')}: </strong></p><p><strong>${t(
    'Description'
  )}:</strong></p><ul><li><p></p></li><li><p></p></li><li><p></p></li></ul><p><strong>${t(
    'Priority'
  )}: </strong>[${t('High')}, ${t('Medium')}, ${t('Low')}]</p><p><strong>${t(
    'Assignee'
  )}: </strong></p><p><strong>${t('Due Date')}: </strong></p><p><strong>${t(
    'Labels'
  )}:</strong></p><ul><li><p>[${t(
    'Categorize the task by type (ex: bug, new feature, improvement)'
  )}]</p></li></ul><p><strong>${t('Issues')}:</strong></p><ul><li><p>[${t(
    'Link to issues related to the task (if applicable)'
  )}]</p></li></ul><p><strong>${t('Resources')}:</strong></p><ul><li><p>[${t(
    'Link to resources related to the task (if applicable)'
  )}]</p></li></ul><p><strong>${t('Progress')}:</strong></p><ul><li><p>[${t(
    'Not Started'
  )}, ${t('In Progress')}, ${t('Completed')}]
  </p></li></ul><p><strong>${t('Notes')}:</strong></p><ul><li><p>[${t(
    'Record any additional information related to the task'
  )}]</p></li></ul>`;

  const ExpertiseTemplate: string = `<p><strong>${t(
    'Title'
  )}:</strong> </p><p><strong>${t('Introduction')}:</strong></p><ul><li><p>${t(
    'Introduce yourself (name, expertise, experience)'
  )}</p></li><li><p>${t(
    'Introduce the topic you want to share'
  )}</p></li><li><p>${t(
    'Reason for choosing to share this topic'
  )}</p></li></ul><p><strong>${t(
    'Main Content'
  )}:</strong></p><ul><li><p><strong>${t(
    'Section 1'
  )}:</strong></p><ul><li><p></p></li><li><p></p></li><li><p></p></li><li><p></p></li></ul></li><li><p><strong>${t(
    'Section 2'
  )}:</strong></p><ul><li><p></p></li><li><p></p></li><li><p></p></li><li><p></p></li></ul></li><li><p>...</p></li></ul><p><strong>${t(
    'Conclusion'
  )}:</strong></p><ul><li><p></p></li><li><p></p></li><li><p></p></li></ul><p><strong>${t(
    'Call to Action'
  )}:</strong></p><ul><li><p></p></li><li><p></p></li><li><p></p></li></ul><p><strong>${t(
    'Hashtags'
  )}: </strong></p>`;

  return (
    <div>
      <button
        type='button'
        className='flex items-center gap-1.5 bg-teal-50 hover:bg-teal-200 text-teal-600 rounded-full py-1 px-2 border-2 border-teal-100 dark:bg-teal-950 dark:hover:bg-teal-900 dark:border-teal-900'
      >
        <BsListTask className='text-base' />
        {t('Template')}
      </button>
      <div data-uk-drop='pos: right-right; mode: click; shift: false; flip: false; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-top-right'>
        <div className='p-2 bg-foreground-1 rounded-lg shadow-lg *:px-4 *:py-1.5 hover:*:bg-hover-1 *:cursor-pointer *:rounded-lg'>
          <div
            className='uk-drop-close'
            onClick={() => {
              editor?.commands.insertContent(BugTemplate);
            }}
          >
            {t('Bug')}
          </div>
          <div
            className='uk-drop-close'
            onClick={() => {
              editor?.commands.insertContent(TaskTemplate);
            }}
          >
            {t('Task')}
          </div>
          <div
            className='uk-drop-close'
            onClick={() => {
              editor?.commands.insertContent(ExpertiseTemplate);
            }}
          >
            {t('Expertise')}
          </div>
        </div>
      </div>
    </div>
  );
}
