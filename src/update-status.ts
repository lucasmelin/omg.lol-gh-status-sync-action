import * as github from '@actions/github'

export async function updateStatus(
  token: string,
  emoji: string,
  message: string
): Promise<void> {
  const updateStatusMutation = `
    mutation ($emoji: String!, $message: String!) {
        changeUserStatus(input: {emoji: $emoji, message: $message}) {
          status {
            emoji
            message
          }
        }
      }
    `
  const octokit = github.getOctokit(token)

  await octokit.graphql(updateStatusMutation, {
    emoji,
    message
  })
}
