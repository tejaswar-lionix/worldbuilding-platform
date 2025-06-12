"""Tests for consistency core distinct"""

def test_consistency_core_0():
    char={"born":1990,"fought_in_war":{"year":1985}}
    assert char["fought_in_war"]["year"] - char["born"] == -5
    assert -5 < 15

def test_consistency_core_1():
    char={"born":1990,"fought_in_war":{"year":1985}}
    assert char["fought_in_war"]["year"] - char["born"] == -5
    assert -5 < 15

def test_consistency_core_2():
    char={"born":1990,"fought_in_war":{"year":1985}}
    assert char["fought_in_war"]["year"] - char["born"] == -5
    assert -5 < 15

def test_consistency_core_3():
    char={"born":1990,"fought_in_war":{"year":1985}}
    assert char["fought_in_war"]["year"] - char["born"] == -5
    assert -5 < 15
