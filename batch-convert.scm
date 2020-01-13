#!/usr/bin/env guile
!#

;; Assumes that current directory is the root of the
;; programming_fundamentals repo.

(use-modules (ice-9 ftw))

(define pngs
  (scandir "image_batch" (lambda (f) (string-suffix? ".png" f))))

(define jpgs
  (map (lambda (f)
         (string-append (string-drop-right f 4) ".jpg"))
       pngs))

(for-each (lambda (png jpg)
            (system* "convert"
                     (string-append "image_batch/" png)
                     (string-append "image_batch/" jpg)))
          pngs jpgs)
