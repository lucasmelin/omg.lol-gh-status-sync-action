import { fetchStatus } from '../src/fetch-status'
import { updateStatus } from '../src/update-status'
import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'
import { expect, test, beforeEach } from '@jest/globals'
import fetchMock from "jest-fetch-mock"

fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});

test('get emoji and message', async () => {
  fetchMock.mockResponseOnce(JSON.stringify({
    "request": {
      "status_code": 200,
      "success": true
    },
    "response": {
      "message": "Here\u2019s the status at lucasmelin.status.lol\/63c9e9aa2555d.",
      "status": {
        "id": "63c9e9aa2555d",
        "address": "lucasmelin",
        "created": "1674176938",
        "relative_time": "1 day ago",
        "emoji": "\u2744\ufe0f",
        "content": "Chillin\u2019 watching Netflix."
      }
    }
  }))

  const { emoji, message } = await fetchStatus("http://example.com");

  expect(emoji).toEqual("❄️")
  expect(message).toEqual("Chillin’ watching Netflix.")
})

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  fetchMock.mockResponseOnce(JSON.stringify({
    "request": {
      "status_code": 200,
      "success": true
    },
    "response": {
      "message": "Here\u2019s the status at lucasmelin.status.lol\/63c9e9aa2555d.",
      "status": {
        "id": "63c9e9aa2555d",
        "address": "lucasmelin",
        "created": "1674176938",
        "relative_time": "1 day ago",
        "emoji": "\u2744\ufe0f",
        "content": "Chillin\u2019 watching Netflix."
      }
    }
  }))

  process.env['INPUT_OMG_LOL_USER'] = 'lucasmelin'
  process.env['INPUT_GITHUB_TOKEN'] = 'fakegithubpat'
  const np = process.execPath
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecFileSyncOptions = {
    env: process.env
  }
  console.log(cp.execFileSync(np, [ip], options).toString())
})
