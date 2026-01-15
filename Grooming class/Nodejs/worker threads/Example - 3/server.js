import express from 'express';
import worker from 'worker_threads'

let THREAD_COUNT = 10;

const app = express();

