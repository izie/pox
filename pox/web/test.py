from flask import Flask
app = Flask(__name__)

from pox.core import core

import os
import posixpath
import urllib
import cgi
import errno
try:
    from cStringIO import StringIO
except ImportError:
    from StringIO import StringIO

log = core.getLogger()
try:
    weblog = log.getChild("server")
except:
    # I'm tired of people running Python 2.6 having problems with this.
    #TODO: Remove this someday.
    weblog = core.getLogger("webcore.server")

@app.route('/status')
def hello_world():
    return 'Hello World!'



def launch ():
    app.run(debug=TRUE, port=80)